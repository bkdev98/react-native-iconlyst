import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPotatoBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.438 21c.712 0 1.325-.496 1.474-1.192l2.025-9.447a1.153 1.153 0 0 0-1.128-1.394h-2.324a.76.76 0 0 0-.72.519l-.514 1.54a.76.76 0 0 1-.719.52h-4.064a.76.76 0 0 1-.719-.52l-.514-1.54a.76.76 0 0 0-.72-.519H6.191c-.734 0-1.282.677-1.128 1.394l2.025 9.447A1.51 1.51 0 0 0 8.562 21h4.23"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 14.397a1.702 1.702 0 1 0 1.702 1.703M16.176 3.542l-.602 6.506m3.017-4.142-.8 3.06M13.71 5.14l-.588 6.403m-1.723.002L10.58 3M7.099 8.965l-.688-4.374m3.152 5.882-.848-4.568"
    />
  </Svg>
);
export default IconlystPotatoBroken;
