import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlassOutline = ({
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
      d="M4.077 4.865a1.4 1.4 0 0 1-.013-.185c0-.66.494-1.11.913-1.38.455-.29 1.063-.52 1.747-.71C8.104 2.22 9.969 2 11.999 2s3.896.22 5.275.59c.685.19 1.293.42 1.749.71.418.27.912.72.912 1.38q0 .1-.015.194L18.747 17.83a3.28 3.28 0 0 1-2.008 2.76c-1.17.5-2.862.91-4.738.91-1.878 0-3.57-.41-4.74-.91a3.28 3.28 0 0 1-2.008-2.76zm14.195 1.583a9 9 0 0 1-.997.332c-1.38.37-3.246.59-5.275.59s-3.896-.22-5.276-.59a9 9 0 0 1-.997-.333L6.747 17.7c.056.67.478 1.25 1.1 1.51.987.42 2.48.79 4.154.79 1.672 0 3.165-.37 4.152-.79a1.79 1.79 0 0 0 1.099-1.5v-.01zM5.618 4.683q.05.046.163.117c.274.18.718.36 1.333.53 1.22.33 2.948.54 4.885.54 1.938 0 3.666-.21 4.885-.54.616-.17 1.06-.35 1.333-.53a1 1 0 0 0 .164-.117 1.3 1.3 0 0 0-.164-.123c-.273-.17-.716-.35-1.333-.52-1.22-.33-2.947-.54-4.885-.54s-3.665.21-4.886.54c-.614.17-1.058.35-1.332.52q-.113.075-.163.123"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlassOutline;
