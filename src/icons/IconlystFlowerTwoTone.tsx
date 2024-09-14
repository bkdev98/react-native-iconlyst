import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowerTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.647 14.673c-1 .568-1.944 1.224-2.44 1.864a2.53 2.53 0 0 0-.503 1.863 2.53 2.53 0 0 0 .953 1.683 2.54 2.54 0 0 0 1.873.513 2.56 2.56 0 0 0 1.684-.962c.485-.64.89-1.702 1.196-2.818M16.127 14.691c.99.567 1.918 1.215 2.413 1.845.405.531.594 1.206.504 1.864a2.51 2.51 0 0 1-.963 1.683 2.52 2.52 0 0 1-1.863.513 2.56 2.56 0 0 1-1.684-.963c-.486-.63-.882-1.71-1.188-2.818M15.496 9.839c.873-.747 1.8-1.423 2.566-1.666a2.51 2.51 0 0 1 1.926.135 2.59 2.59 0 0 1 1.27 1.468 2.58 2.58 0 0 1-.145 1.935 2.54 2.54 0 0 1-1.467 1.26c-.756.253-1.908.27-3.051.19M9.268 9.839c-.873-.747-1.8-1.423-2.566-1.666a2.54 2.54 0 0 0-1.935.135 2.57 2.57 0 0 0-1.26 1.468 2.58 2.58 0 0 0 .144 1.935 2.54 2.54 0 0 0 1.467 1.26c.756.253 1.908.27 3.052.19M10.654 8.85c-.44-1.054-.783-2.143-.783-2.935 0-.676.27-1.315.747-1.791a2.5 2.5 0 0 1 1.783-.739 2.52 2.52 0 0 1 2.53 2.53c0 .8-.343 1.89-.784 2.943"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.389 16.936a4.234 4.234 0 1 0 0-8.467 4.234 4.234 0 0 0 0 8.467"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowerTwoTone;
