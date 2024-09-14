import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPinBroken = ({
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
      d="M19.187 10.299v-1.3c0-.53-.205-1.038-.571-1.42L14.824 3.63A2.05 2.05 0 0 0 13.346 3H7.695a3.747 3.747 0 0 0-3.76 3.657v5.253M11.607 20.997l-4.003-.001a3.753 3.753 0 0 1-3.67-3.834v-2.627"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.828 5.953a2.56 2.56 0 0 0 2.554 2.56h2.739M15.76 12.996a1.065 1.065 0 0 0-.74 1.83s.488.365.565.546c.097.23.112.776 0 1-.114.227-.81.608-.81.608a1.68 1.68 0 0 0-.671 1.342c0 .373.303.677.677.677h4.61a.677.677 0 0 0 .676-.677c0-.528-.248-1.026-.67-1.342 0 0-.697-.381-.81-.608-.112-.224-.099-.77 0-1 .076-.181.564-.547.564-.547a1.063 1.063 0 0 0-.74-1.829M17.086 19v2.001M11.002 14.109H8.235M9.722 9.98H8.234"
    />
  </Svg>
);
export default IconlystDocumentPinBroken;
