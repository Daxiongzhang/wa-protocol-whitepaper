# 白皮书数据层/视图层解耦重构说明

## 目录结构（重构后）

```
src/
  data/
    whitepaper/
      content/
        whitepaper-content.en.ts
        whitepaper-content.zh.ts
        whitepaper-content.id.ts
        whitepaper-content.th.ts
        whitepaper-content.vi.ts
        whitepaper-content.ko.ts
        whitepaper-content.ja.ts
      loader.ts
      types.ts
      whitepaper-translations.ts
      index.ts
    faq/
      content/
        faq.zh.ts
        faq.en.ts
        faq.id.ts
        faq.th.ts
        faq.vi.ts
        faq.ko.ts
        faq.ja.ts
      loader.ts
      types.ts
      index.ts
    index.ts
  components/
    whitepaper/
      WhitepaperContentRenderer.tsx
      WhitepaperTableOfContents.tsx
      WhitepaperSectionList.tsx
  pages/
    WhitepaperPage.tsx
    FAQPage.tsx
```

## 数据层原则

- `src/data/whitepaper/content/*`：每个语言一个文件，只输出该语言的 `WhitepaperContent`（纯数据）。
- `src/data/whitepaper/whitepaper-translations.ts`：UI 文案翻译（标题、按钮、目录等）。
- `src/data/whitepaper/loader.ts`：按语言动态导入内容（code-splitting + fallback）。
- `src/data/whitepaper/types.ts`：统一 TypeScript 类型定义。

## 视图层原则

- `WhitepaperPage.tsx`：只做页面级交互与布局（滚动定位、展开折叠、返回首页）。
- `WhitepaperTableOfContents.tsx`：只渲染目录。
- `WhitepaperSectionList.tsx`：只渲染章节卡片列表。
- `WhitepaperContentRenderer.tsx`：只负责把章节 markdown-like 字符串渲染为 React 结构。

## 示例：一个完整章节 data 文件

文件：`src/data/whitepaper/content/whitepaper-content.ja.ts`

要点：
- 只包含 `sections` 数据
- 不引入任何组件，不做任何渲染逻辑

## 示例：一个章节渲染组件

文件：`src/components/whitepaper/WhitepaperSectionList.tsx`

要点：
- 接收 `sections` + 交互状态（`expandedSection`）
- 只渲染结构
- 正文交给 `WhitepaperContentRenderer`

## 落地步骤（在现有项目中如何推进）

1. **先落地类型与 loader**
   - 建 `src/data/whitepaper/types.ts`
   - 建 `src/data/whitepaper/loader.ts`，封装语言选择与 fallback

2. **拆分内容文件（按语言）**
   - 将原 `src/data/whitepaper-content.ts` 中的 `whitepaperContent` 拆到 `src/data/whitepaper/content/whitepaper-content.<lang>.ts`
   - 将 `whitepaperTranslations` 拆到 `src/data/whitepaper/whitepaper-translations.ts`

3. **改页面只依赖 loader（解除耦合）**
   - `WhitepaperPage.tsx` 从 `loadWhitepaperContent(language)` 获取数据
   - 避免直接 import 大对象常量

4. **拆小组件（控制每个组件 <200 行）**
   - 把 TOC、章节列表抽组件
   - 保持页面组件只做 orchestration

5. **逐步迁移其他静态内容（FAQ 等）**
   - 采用同样模式：`src/data/faq/content/faq.<lang>.ts` + `loader.ts` + `types.ts`

## FAQ 拆分说明（按语言）

### 数据层

- `src/data/faq/content/faq.<lang>.ts`
  - 每个语言一个文件
  - 只导出 `FAQContent` 常量（纯数据，不引用任何组件）
- `src/data/faq/loader.ts`
  - `loadFAQContent(language)` 使用 `switch` + 动态 `import()` 进行按语言加载
  - 包含 fallback（默认回退到 `zh`）
- `src/data/faq/types.ts`
  - 复用现有 `src/types/content.types.ts` 的 `FAQContent` / `CategoryKey`，避免重复定义

### 视图层接入点

- `src/pages/FAQPage.tsx`
  - 从 `loadFAQContent(language)` 异步拉取 FAQ 文案
  - 组件仅保留交互和布局逻辑（分类切换、搜索、展开折叠）

## 过渡期文件（Option 1）

为便于回滚/对照，目前仍保留以下旧文件：

- `src/data/whitepaper-content.ts`
- `src/data/faq-content.ts`

在确认线上/本地运行一段时间且无引用后，可再执行清理（删除旧文件并全局 grep 确认无 import）。

## 注意事项

- 动态 import 的路径必须是字面量，不能用变量拼接（Vite/rollup 才能正确分包）。
- 建议将 `Record<string, ...>` 收紧为 `Record<Language, ...>`，避免漏 key。
- 目前 `src/data/whitepaper-content.ts` 仍存在，可作为过渡期备份；确认无引用后可再删除/下线。
