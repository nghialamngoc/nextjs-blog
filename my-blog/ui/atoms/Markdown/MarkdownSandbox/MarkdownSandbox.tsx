import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPredefinedTemplate,
  SandpackPreview,
  SandpackProvider,
  SandpackProviderProps,
} from '@codesandbox/sandpack-react'
import { FC } from 'react'

export interface MarkdownSandboxProps extends SandpackProviderProps {}

export const MarkdownSandbox: FC<MarkdownSandboxProps> = (props) => {
  const { template, options, files } = props
  return (
    <div>
      <SandpackProvider template={template} options={options} files={files}>
        <SandpackLayout>
          <SandpackCodeEditor showRunButton={false} />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}
