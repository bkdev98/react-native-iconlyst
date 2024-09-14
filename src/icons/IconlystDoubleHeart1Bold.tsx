import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart1Bold = ({
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
      d="M14.506 9.44a4.73 4.73 0 0 1 2.831.017c.065.021.134.02.198 0 .483-.158.99-.239 1.494-.235.19.002.348-.159.316-.346-.343-1.983-1.636-3.585-3.569-4.226-.82-.25-1.67-.31-2.53-.16-.74.12-1.42.55-2.03.99-.63-.46-1.3-.88-2.03-1-.84-.15-1.69-.09-2.53.17-3.23 1.06-4.23 4.61-3.33 7.44 1.49 4.54 7.43 7.35 7.68 7.46.07.03.14.05.21.05s.15-.02.21-.05c.055-.018.766-.356 1.755-.963a.305.305 0 0 0 .059-.466c-.687-.747-1.292-1.633-1.604-2.63-.83-2.59.42-5.25 2.87-6.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.908 10.863a3.08 3.08 0 0 0-2.47.271 3.15 3.15 0 0 0-2.469-.27c-1.839.6-2.413 2.596-1.905 4.176.764 2.433 3.996 4.233 4.133 4.308a.5.5 0 0 0 .481.001c.135-.074 3.345-1.844 4.135-4.306.507-1.584-.065-3.579-1.905-4.18"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleHeart1Bold;
