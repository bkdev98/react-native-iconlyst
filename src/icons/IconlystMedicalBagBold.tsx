import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalBagBold = ({
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
      d="M9.37 5.064a1.19 1.19 0 0 1 1.186-1.189h2.89a1.19 1.19 0 0 1 1.187 1.189v.421H9.37zm11.99 4.69c-.144-2.375-2.103-4.269-4.514-4.269h-.713v-.421a2.69 2.69 0 0 0-2.687-2.689h-2.89A2.69 2.69 0 0 0 7.87 5.064v.421h-.715c-2.41 0-4.37 1.894-4.513 4.269zM13.969 17.024H12.75v1.21a.75.75 0 0 1-1.5 0v-1.21h-1.215a.75.75 0 0 1 0-1.5h1.215v-1.221a.75.75 0 0 1 1.5 0v1.221h1.219a.75.75 0 0 1 0 1.5m-11.355-5.77v5.831a4.546 4.546 0 0 0 4.54 4.54h9.692a4.546 4.546 0 0 0 4.54-4.54v-5.831z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMedicalBagBold;
