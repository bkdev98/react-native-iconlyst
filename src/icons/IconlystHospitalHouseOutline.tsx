import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalHouseOutline = ({
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
      d="M13.648 4.248a2.21 2.21 0 0 0-2.795 0l-5.574 4.54a2.22 2.22 0 0 0-.816 1.716v7.173a2.57 2.57 0 0 0 2.572 2.573h10.431a2.57 2.57 0 0 0 2.572-2.573v-7.173a2.22 2.22 0 0 0-.816-1.716zm.947-1.163a3.71 3.71 0 0 0-4.69 0l-5.574 4.54a3.72 3.72 0 0 0-1.368 2.88v7.172a4.07 4.07 0 0 0 4.072 4.073h10.431a4.07 4.07 0 0 0 4.072-4.073v-7.173a3.72 3.72 0 0 0-1.368-2.879z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.483 10.066v1.371a.75.75 0 0 1-.75.75H9.36v1.54h1.374a.75.75 0 0 1 .75.75v1.37h1.534v-1.37a.75.75 0 0 1 .75-.75h1.373v-1.54h-1.373a.75.75 0 0 1-.75-.75v-1.37zm-1.5-.28c0-.674.546-1.22 1.22-1.22h2.094c.674 0 1.22.546 1.22 1.22v.902h.903c.674 0 1.22.545 1.22 1.22v2.098a1.22 1.22 0 0 1-1.22 1.221h-.903v.9a1.22 1.22 0 0 1-1.22 1.22h-2.094a1.22 1.22 0 0 1-1.22-1.22v-.9H9.08c-.674 0-1.22-.548-1.22-1.22v-2.1c0-.675.548-1.22 1.22-1.22h.904z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalHouseOutline;
