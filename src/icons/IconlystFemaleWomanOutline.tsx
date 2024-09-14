import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFemaleWomanOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.47 20.22a.75.75 0 0 1 0-1.06l1.04-1.04-.938-.938a.75.75 0 0 1 1.06-1.06l.938.937 1.542-1.542a7.662 7.662 0 1 1 1.05 1.073L6.63 18.12l.936.936a.75.75 0 0 1-1.06 1.06l-.936-.936-1.04 1.04a.75.75 0 0 1-1.06 0m5.248-5.153a6.16 6.16 0 0 0 10.531-4.344 6.161 6.161 0 1 0-10.611 4.261l.035.033z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFemaleWomanOutline;
