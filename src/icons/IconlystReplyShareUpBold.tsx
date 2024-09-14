import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareUpBold = ({
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
      d="m19.528 9.896-5.845-6.899a1.4 1.4 0 0 0-1.052-.499c-.375.017-.79.163-1.061.462L5.325 9.87a1.39 1.39 0 0 0-.241 1.51c.229.516.723.837 1.289.837h3.154c-.121 4.104-1.75 6.733-5.097 8.249a.5.5 0 0 0 .136.951c.067.009.632.086 1.479.086 1.763 0 4.752-.333 7.013-2.294 1.842-1.598 2.822-3.948 2.917-6.993l2.483-.001a1.39 1.39 0 0 0 1.274-.816 1.4 1.4 0 0 0-.204-1.502"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareUpBold;
