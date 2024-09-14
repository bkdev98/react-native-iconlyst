import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M7.62 21.223c-2.07 0-3.04-1.23-3.73-2.11-.38-.48-.71-.89-1.08-.99a.75.75 0 1 1 .36-1.46c.87.22 1.39.88 1.89 1.51.8 1.01 1.49 1.89 3.64 1.41v-.23c-.04-.62.08-1.25.35-1.83-2.6-.54-5.42-2.06-5.42-7.01 0-1.34.45-2.63 1.29-3.66a5.44 5.44 0 0 1 .24-3.6.76.76 0 0 1 .48-.43c.23-.07 1.47-.31 3.96 1.28 2.03-.49 4.16-.49 6.19 0 2.49-1.59 3.73-1.35 3.96-1.28.21.06.39.22.48.43.49 1.15.57 2.41.24 3.6.84 1.03 1.29 2.3 1.29 3.63 0 5.01-2.82 6.51-5.42 7.03.27.59.39 1.24.34 1.9v.73a.749.749 0 1 1-1.5 0v-.79c.06-.73-.19-1.39-.66-1.88a.76.76 0 0 1-.17-.77c.1-.27.34-.46.62-.49 2.74-.31 5.28-1.22 5.28-5.72 0-1.09-.42-2.14-1.18-2.94a.75.75 0 0 1-.16-.78c.3-.8.33-1.66.09-2.47-.43.07-1.3.33-2.66 1.25-.18.12-.4.16-.61.1-1.99-.54-4.09-.54-6.07 0-.21.06-.43.02-.61-.1-1.35-.91-2.22-1.17-2.66-1.24-.23.81-.2 1.67.09 2.47.1.27.04.57-.16.78-.77.8-1.18 1.86-1.18 2.97 0 4.45 2.54 5.38 5.29 5.72.28.03.52.23.61.49.1.27.03.57-.17.77-.47.49-.71 1.15-.66 1.81v.86c0 .33-.22.62-.53.72-.78.23-1.46.33-2.05.33z"
    />
  </Svg>
);
export default IconlystGithubOutline;