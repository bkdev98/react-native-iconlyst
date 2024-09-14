import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVisualStudioOutline = ({
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
      d="M16.935 3.452a.75.75 0 0 1 .919-.126l3.526 2.07c.23.135.37.381.37.647v11.915a.75.75 0 0 1-.37.647l-3.526 2.07a.75.75 0 0 1-.92-.125L9.72 13.08 5.34 17.613a.75.75 0 0 1-.913.13l-1.8-1.036a.75.75 0 0 1-.377-.65V7.944a.75.75 0 0 1 .376-.65L4.427 6.26a.75.75 0 0 1 .913.129l4.38 4.533zM10.762 12l6.841 7.082 2.647-1.554V6.473l-2.647-1.555zm-2.086 0L4.668 7.85l-.918.527v7.245l.918.528z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVisualStudioOutline;
