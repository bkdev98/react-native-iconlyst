import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBikeOutline = ({
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
      d="M18.415 4.913a.75.75 0 0 1-.396.984l-1.594.68 1.579 5.244q.186-.018.377-.018a3.869 3.869 0 1 1-3.797 4.619h-4.168a3.87 3.87 0 1 1-2.223-4.286l1.538-2.182-1.263-1.732h-.686a.75.75 0 0 1 0-1.5h2.623a.75.75 0 0 1 0 1.5h-.08l.71.974h4.612l-.852-2.829a.75.75 0 0 1 .424-.906l2.211-.944a.75.75 0 0 1 .985.396m-2.316 5.783h-5.056l-1.624 2.305a3.86 3.86 0 0 1 .997 1.92h4.168a3.88 3.88 0 0 1 1.984-2.668zm.915 3.04a2.37 2.37 0 1 0 1.436-.433l.496 1.646a.75.75 0 0 1-1.436.432zm-9.713-.334-.837 1.188a.75.75 0 0 0 1.226.864l.837-1.187a2.369 2.369 0 1 1-1.226-.864"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBikeOutline;
