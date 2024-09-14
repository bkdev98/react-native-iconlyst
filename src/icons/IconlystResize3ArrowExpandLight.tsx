import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3ArrowExpandLight = ({
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
      d="M12.002 4.461 12 11.767M8.65 7.826 12 4.462l3.348 3.364M20 18.322l-6.327-3.653m5.089-.93L20 18.32l-4.587 1.218M4 18.322l6.327-3.653m-5.089-.93L4 18.32l4.587 1.218"
    />
  </Svg>
);
export default IconlystResize3ArrowExpandLight;
