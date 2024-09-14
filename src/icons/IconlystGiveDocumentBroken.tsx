import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiveDocumentBroken = ({
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
      d="M11.913 17.124h1.291c.922 0 1.666-.663 1.666-1.584 0-.767-.518-1.379-1.261-1.566-1.063-.266-2.124-.475-3.233-.448-1.758.042-2.988 1.022-4.382 1.954"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.915 17.153c.653-.096 1.317 0 1.977-.015 1.528-.036 2.727-1.329 3.89-2.205a1.49 1.49 0 0 1 1.953.14 1.503 1.503 0 0 1 0 2.12c-1.256 1.263-2.367 2.434-4.07 3.096-2.365.92-4.559.473-6.953 0M3.827 20.999h.968c.74 0 1.199-.522 1.199-1.26v-4.323c0-.738-.46-1.26-1.199-1.26h-.968M19.228 10.959V8.687c0-.502-.193-.984-.54-1.346l-3.595-3.744A1.95 1.95 0 0 0 13.691 3H8.335a3.55 3.55 0 0 0-3.564 3.467v4.492"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.15 5.8a2.427 2.427 0 0 0 2.421 2.428h2.597"
    />
  </Svg>
);
export default IconlystGiveDocumentBroken;
