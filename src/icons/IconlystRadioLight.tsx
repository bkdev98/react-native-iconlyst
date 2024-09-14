import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioLight = ({
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
      d="M7.468 7.666h9.063C19.285 7.666 21 9.61 21 12.363v3.788c0 2.752-1.715 4.696-4.47 4.696H7.468C4.714 20.847 3 18.903 3 16.151v-3.788C3 9.61 4.721 7.666 7.468 7.666M14.535 12.41h2.742M14.535 15.621h2.742"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.108 14.256a2.192 2.192 0 1 0-4.384 0 2.192 2.192 0 0 0 4.384 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.012 7.87 5.967-4.716"
    />
  </Svg>
);
export default IconlystRadioLight;
