import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlagBold = ({
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
      fillRule="evenodd"
      d="M19.466 3.45a.75.75 0 0 0-.771.04c-.023.013-2.282 1.48-6.552-.349-5.1-2.179-7.677.31-7.785.417a.75.75 0 0 0-.22.531v16.912a.75.75 0 0 0 1.5 0v-6.953c.624-.428 2.538-1.37 5.915.073 5.017 2.147 7.861.295 7.979.214a.75.75 0 0 0 .33-.622V4.111a.75.75 0 0 0-.396-.662"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlagBold;
