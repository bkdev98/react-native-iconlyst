import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacNotebookAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 16.416v.507a2.43 2.43 0 0 0 2.429 2.429h13.143A2.43 2.43 0 0 0 21 16.923v-.507a.55.55 0 0 0-.55-.55H3.55a.55.55 0 0 0-.55.55"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.668 15.867V7.66a3.01 3.01 0 0 0-3.011-3.013H7.34a3.01 3.01 0 0 0-3.012 3.013v8.206"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.154 11.881-.084-.228a3.15 3.15 0 0 0-1.857-1.86l-.228-.084.228-.085a3.15 3.15 0 0 0 1.857-1.86l.084-.228.085.229c.318.861.996 1.54 1.856 1.86l.229.084-.229.084a3.15 3.15 0 0 0-1.856 1.86zM14.971 12.923a1.56 1.56 0 0 0-1.04-1.042 1.56 1.56 0 0 0 1.04-1.041c.152.499.542.89 1.04 1.041a1.56 1.56 0 0 0-1.04 1.042"
    />
  </Svg>
);
export default IconlystMacNotebookAiLight;
