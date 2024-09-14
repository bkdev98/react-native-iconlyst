import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpTwiceBulk = ({
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
      d="M8.465 3.084c.093 0 .177.029.263.053.038.01.08.008.117.024a1 1 0 0 1 .335.227l3.953 3.954a.999.999 0 1 1-1.414 1.414L9.465 6.502V19.92a1 1 0 1 1-2 0V6.495l-2.259 2.26a1 1 0 0 1-1.415-1.413l3.963-3.965a1 1 0 0 1 .708-.293z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.914 19.92v-5.804L14.04 15.99a1 1 0 1 1-1.415-1.414l3.547-3.546a1 1 0 0 1 1.452-.038l3.584 3.584a.999.999 0 1 1-1.414 1.414l-1.879-1.88v5.809a1 1 0 1 1-2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpTwiceBulk;
