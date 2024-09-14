import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTomatoLight = ({
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
      d="M14.904 7.084c3.198 1.012 5.479 3.646 5.479 6.737C20.383 17.786 16.63 21 12 21s-8.382-3.214-8.382-7.18c0-3.144 2.36-5.817 5.648-6.788"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.905 9.565c.317-1.162.594-1.771 1.686-2.59-.528-.967-.67-1.517-.722-2.53 1.586.486 2.249.952 3.252 1.928 1.145-.923 1.906-1.305 3.432-1.927-.11 1.128-.33 1.683-1.084 2.529 1.005.75 1.323 1.344 1.626 2.59-1.045.188-1.638.1-2.71-.542-.322.9-.632 1.308-1.565 1.746-.695-.578-1.005-.945-1.265-1.746-.86.639-1.428.798-2.65.542"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.134 3c.279 1.23.415 2.564 0 3.371"
    />
  </Svg>
);
export default IconlystTomatoLight;
