import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneTakeOffBulk = ({
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
      d="M21.656 10.032c-.196-.696-.622-1.23-1.231-1.542-1.175-.604-2.577-.208-3.125-.01-1.088.393-2.137.854-3.23 1.296a161 161 0 0 0-3.603-3.215c-.826-.722-1.674-.987-2.527-.783-.443.108-.862.269-1.267.424q-.309.121-.632.235a.747.747 0 0 0-.45.995l2.07 5.019c-.713.3-1.59.672-2.417 1.023l-1.245.528c-.123-.298-.256-.618-.305-.74a.75.75 0 0 0-1.39.568c.09.22.45 1.085.544 1.31l.058.133.002.003.019.042c.888 1.943 2.366 2.973 4.156 2.973.676 0 1.398-.148 2.149-.45 3.299-1.316 6.466-2.64 10.268-4.236 1.357-.581 2.612-1.948 2.156-3.573"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneTakeOffBulk;
