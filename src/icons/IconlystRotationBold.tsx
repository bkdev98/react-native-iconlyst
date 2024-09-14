import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotationBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.069 15.893c.39 0 .757-.152 1.032-.428l2.136-2.135a1.455 1.455 0 0 0 0-2.066L13.102 9.13c-.554-.554-1.516-.553-2.066 0L8.9 11.262a1.46 1.46 0 0 0-.429 1.033c0 .39.153.758.429 1.034l2.136 2.135c.275.276.642.428 1.033.428"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.336 7.278a.75.75 0 0 0-.095-1.324l-2.878-1.259a.747.747 0 0 0-1.05.666l-.084 3.097a.75.75 0 0 0 1.145.657l.86-.533c1.586 3.06 1.107 6.947-1.43 9.503a8.15 8.15 0 0 1-7.218 2.277.75.75 0 0 0-.266 1.477 9.643 9.643 0 0 0 8.548-2.698c3.032-3.053 3.579-7.71 1.64-11.349zM5.627 15.485l-.861.534c-1.586-3.06-1.107-6.949 1.43-9.504a8.15 8.15 0 0 1 7.218-2.278.75.75 0 0 0 .266-1.477 9.65 9.65 0 0 0-8.548 2.698c-3.032 3.054-3.58 7.713-1.64 11.35l-.828.514a.751.751 0 0 0 .095 1.325l2.879 1.258a.752.752 0 0 0 1.05-.667l.085-3.096a.75.75 0 0 0-1.146-.658"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRotationBold;
