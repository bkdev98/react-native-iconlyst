import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudyWindyMoonLight = ({
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
      d="M11.919 15.724a3 3 0 0 1-1.094-.223 2.72 2.72 0 0 1-1.601-2.48c0-1.707 1.205-2.709 2.697-2.722 0-1.073.841-3.22 3.218-3.22s3.22 2.147 3.22 3.22c1.491.013 2.696 1.015 2.696 2.721a2.72 2.72 0 0 1-1.599 2.484c-.402.161-.8.22-1.1.22"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.52 14.516a3.9 3.9 0 0 1-1.406-.287 3.5 3.5 0 0 1-2.06-3.19c0-2.195 1.551-3.484 3.47-3.5 0-1.381 1.082-4.142 4.14-4.142 2.71 0 3.868 2.17 4.097 3.623M6.914 20.046a1.262 1.262 0 0 0 2.31-.706c0-.697-.51-1.263-1.263-1.263H3.926M18.518 20.603h-1.54M14.164 16.339a1.36 1.36 0 0 1 2.345.938c0 .75-.498 1.346-1.36 1.36h-3.29"
    />
  </Svg>
);
export default IconlystCloudyWindyMoonLight;
