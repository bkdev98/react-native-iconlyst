import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLike2TwoTone = ({
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
      d="M9.35 3H15.6c2.183 0 3.542 1.541 3.542 3.724v10.552c0 2.183-1.359 3.724-3.543 3.724H9.35c-2.183 0-3.541-1.541-3.541-3.724V6.724C5.809 4.54 7.174 3 9.35 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 11.894c-.283-.89.049-1.905.982-2.205a1.6 1.6 0 0 1 1.44.242 1.6 1.6 0 0 1 1.437-.242c.933.3 1.267 1.315.983 2.204-.442 1.408-2.42 2.494-2.42 2.494s-1.963-1.07-2.421-2.494"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.143 17.4H5.814M19.143 6.6H5.814"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPhoneLike2TwoTone;