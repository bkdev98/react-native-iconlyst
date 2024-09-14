import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrapAiTwoTone = ({
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
      strokeWidth={1.5}
      d="M17.015 17.08c2.099-1.2 3.467-3.166 3.467-5.387 0-3.418-3.239-6.23-7.395-6.581m3.928 11.969c-1.354.774-2.136 1.327-3.929 1.327-3.722 0-3.359-4.233-.257-4.233 2.579 0 3.92 1.379 4.186 2.906Zm0 0c.288 1.657-.692 3.488-2.738 3.919M7.245 16.988c-2.009-1.207-3.309-3.13-3.309-5.295q.001-.63.142-1.227"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.948 5.495.098.265c.37.999 1.156 1.787 2.153 2.156l.265.098-.265.098a3.65 3.65 0 0 0-2.153 2.157l-.098.265-.098-.265a3.65 3.65 0 0 0-2.153-2.157l-.265-.098.265-.098A3.65 3.65 0 0 0 8.85 5.76zM4.764 3a1.87 1.87 0 0 0 1.245 1.247 1.87 1.87 0 0 0-1.245 1.248 1.87 1.87 0 0 0-1.246-1.248A1.87 1.87 0 0 0 4.764 3"
    />
  </Svg>
);
export default IconlystTrapAiTwoTone;
