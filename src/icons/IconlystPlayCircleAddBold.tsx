import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayCircleAddBold = ({
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
      d="M11.066 9.834a.9.9 0 0 0-.338-.076.5.5 0 0 0-.26.064c-.178.103-.24.308-.26.463a18.2 18.2 0 0 0 .003 3.853c.014.113.067.344.245.449.149.089.368.082.62-.017a9.4 9.4 0 0 0 2.75-1.744c.149-.138.323-.358.323-.628-.001-.267-.175-.482-.32-.614a9.2 9.2 0 0 0-2.763-1.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.845 13.927-.004.004a10.9 10.9 0 0 1-3.206 2.03 2.5 2.5 0 0 1-.932.188c-.363 0-.707-.09-1.012-.272-.54-.32-.886-.878-.97-1.572a19.8 19.8 0 0 1 0-4.2c.09-.708.446-1.266 1.002-1.585.566-.323 1.266-.349 1.923-.07a10.7 10.7 0 0 1 3.198 2.03c.515.47.802 1.08.804 1.713.003.635-.282 1.251-.803 1.734m-.977-9.54q.001-.598.118-1.162c.054-.263-.138-.522-.406-.522H7.548c-3.16 0-5.283 2.221-5.283 5.526v7.948c0 3.306 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.22 5.283-5.526v-5.682c0-.266-.255-.458-.516-.407q-.524.102-1.078.103a5.803 5.803 0 0 1-5.803-5.804"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.985 4.426h-1.378v-1.38a.75.75 0 0 0-1.5 0v1.38h-1.38a.75.75 0 0 0 0 1.5h1.379v1.378a.75.75 0 0 0 1.5 0V5.926h1.379a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayCircleAddBold;
