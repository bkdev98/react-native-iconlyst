import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinDegreeHomeOutline = ({
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
      d="M11.217 4.247a2.214 2.214 0 0 1 2.795 0zm0 0-5.574 4.54a2.22 2.22 0 0 0-.816 1.717v7.174A2.57 2.57 0 0 0 7.4 20.25H17.83a2.57 2.57 0 0 0 2.572-2.572v-7.174c0-.665-.3-1.295-.816-1.716l-5.574-4.541M10.27 3.084a3.714 3.714 0 0 1 4.69 0l5.575 4.54a3.72 3.72 0 0 1 1.368 2.88v7.174a4.07 4.07 0 0 1-4.072 4.072H7.4a4.07 4.07 0 0 1-4.072-4.072v-7.174c0-1.116.502-2.173 1.368-2.879z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.15 9.927a.946.946 0 1 1 1.89 0 .946.946 0 0 1-1.89 0M12.05 10.205a.75.75 0 0 1 .75.75v6.302a.75.75 0 0 1-1.5 0v-6.302a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.89 10.458a.75.75 0 0 1-.066 1.059l-4.27 3.778a.75.75 0 0 1-.995-1.123l4.271-3.779a.75.75 0 0 1 1.06.065"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.806 17.836a.75.75 0 0 0 .101-1.056l-2.977-3.606a.75.75 0 0 0-1.157.955l2.978 3.606a.75.75 0 0 0 1.055.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKelvinDegreeHomeOutline;
