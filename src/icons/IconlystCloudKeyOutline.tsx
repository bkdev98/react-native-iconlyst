import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudKeyOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.847 6.052c.898-1.186 2.334-2.135 4.403-2.135 2.07 0 3.505.95 4.403 2.135A6.35 6.35 0 0 1 17.84 8.86c1.04.13 1.993.557 2.73 1.263.902.864 1.43 2.101 1.43 3.585a4.89 4.89 0 0 1-2.878 4.457.75.75 0 1 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.114-.387-1.946-.968-2.502-.586-.562-1.419-.889-2.386-.89a.75.75 0 0 1-.749-.75c0-.657-.27-1.722-.94-2.608-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54c-.67.886-.94 1.95-.94 2.608a.75.75 0 0 1-.743.75c-.97.01-1.805.338-2.392.898-.58.554-.968 1.382-.968 2.494 0 1.374.817 2.559 1.995 3.09a.75.75 0 1 1-.617 1.367A4.89 4.89 0 0 1 2.5 13.706c0-1.484.529-2.716 1.432-3.578.737-.704 1.69-1.129 2.727-1.265a6.35 6.35 0 0 1 1.188-2.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.216 12.643a.75.75 0 0 1 .75.75v.013a.75.75 0 1 1-1.5 0v-.013a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.34 11.147a4.049 4.049 0 1 1 5.726 5.727q-.166.165-.337.296v3.85c0 .305-.122.597-.337.813l-1.287 1.287a1.15 1.15 0 0 1-1.628 0l-1.287-1.288a1.15 1.15 0 0 1 0-1.628l.023-.023-.334-.334a.75.75 0 0 1 0-1.06l.32-.32-.028-.028a.75.75 0 0 1-.22-.53v-.533a4.049 4.049 0 0 1-.611-6.229m2.13 8.17.334.334a.75.75 0 0 1 0 1.06l-.306.307.793.794.938-.937V16.78a.75.75 0 0 1 .346-.632c.169-.108.309-.214.43-.336a2.55 2.55 0 1 0-2.962.468.75.75 0 0 1 .408.667v.65l.339.338a.75.75 0 0 1 0 1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudKeyOutline;
