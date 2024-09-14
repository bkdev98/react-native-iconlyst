import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocation2Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.1 10.24a3.15 3.15 0 1 1 6.3-.001 3.15 3.15 0 0 1-6.3 0m3.15-1.651a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.389c-3.537 0-6.562 3.199-6.45 6.8.079 2.548 1.684 4.568 3.47 6.52l.543.588c.695.75 1.39 1.5 1.938 2.235q.264.351.49.722.234-.385.508-.748c.55-.735 1.25-1.48 1.947-2.22q.27-.288.537-.574c1.782-1.92 3.387-3.917 3.467-6.522.11-3.602-2.914-6.801-6.45-6.801m.75 19.25c0-.684.324-1.398.95-2.234.495-.661 1.118-1.324 1.806-2.056l.577-.616c1.773-1.912 3.768-4.278 3.866-7.498.135-4.413-3.532-8.346-7.95-8.346-4.416 0-8.085 3.933-7.948 8.347.098 3.16 2.092 5.551 3.862 7.485q.298.325.583.632c.686.74 1.308 1.41 1.802 2.075.63.846.951 1.554.951 2.21z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLocation2Outlinesharp;
