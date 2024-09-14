import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldTimeBroken = ({
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
      d="M21.224 17.371a3.63 3.63 0 1 1-7.259-.001 3.63 3.63 0 0 1 7.26.001"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.721 18.317-1.147-.686v-1.475M11.25 20.34a8.683 8.683 0 0 1-7.975-8.66A8.67 8.67 0 0 1 6.535 4.9M11.955 3c4.435 0 8.083 3.323 8.606 7.614"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.169 10.794a20 20 0 0 0-.19-2.131C14.527 5.357 13.344 3 11.953 3 10.572 3 9.38 5.357 8.928 8.663a21 21 0 0 0-.207 3.016c0 1.066.072 2.086.207 3.026.316 2.293 1.291 4.506 2.32 5.635M5.226 11.69h6.337"
    />
  </Svg>
);
export default IconlystWorldTimeBroken;
