import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsbStorageBold = ({
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
      d="m19.837 8.843-1.933 1.933c-.14-.21-.31-.41-.5-.6l-3.55-3.55c-.19-.19-.39-.36-.6-.5q0 0-.003-.002l1.934-1.933c.622-.62 1.39-.59 2.056.075l2.521 2.521c.327.326.507.69.52 1.052.012.353-.14.7-.445 1.004m-8.724 5.772c.3-.3.77-.3 1.07 0 .29.29.29.77 0 1.06l-1.94 1.93c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06zm10.667-6.83c-.026-.737-.366-1.469-.958-2.059l-2.52-2.52c-1.252-1.252-2.97-1.285-4.178-.076L11.75 5.505c-1.059-.178-2.147.161-2.996 1.01l-5.14 5.14c-.74.74-1.11 1.63-1.08 2.56.03.91.45 1.79 1.19 2.53l3.55 3.56c.75.74 1.62 1.16 2.53 1.19h.12c.89 0 1.74-.37 2.45-1.08l5.14-5.14c.71-.71 1.08-1.56 1.08-2.46 0-.179-.02-.368-.059-.547l2.364-2.364c.596-.598.91-1.35.882-2.119"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.672 5.501-.01.01c-.286.3-.269.77.031 1.055a.74.74 0 0 0 .514.205c.201 0 .402-.08.551-.236a.75.75 0 1 0-1.086-1.034M17.47 7.225l-.01.01a.745.745 0 0 0-.045 1.054c.148.162.35.244.554.244a.75.75 0 1 0-.498-1.308"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUsbStorageBold;
