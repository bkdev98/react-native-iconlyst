import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoapTwoTone = ({
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
      d="M20.474 11.74c.611 0 1.092.537 1.019 1.144a9.3 9.3 0 0 1-.413 1.84 9.47 9.47 0 0 1-4.373 5.273 4 4 0 0 1-1.94.486h-4.533c-.679 0-1.353-.16-1.946-.489a9.44 9.44 0 0 1-4.78-7.116 1.025 1.025 0 0 1 1.018-1.138z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.013 14.719h17.099M14.822 3.518l-.828 5.318m5.145-4.182L16.98 8.836"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSoapTwoTone;
