import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWrenchOutline = ({
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
      d="M18.218 3.648a.75.75 0 0 1-.204.381l-3.399 3.399a.5.5 0 0 0-.117.171l-.006.014a.56.56 0 0 0-.027.31l.32 1.612a.55.55 0 0 0 .433.432l1.605.316a.55.55 0 0 0 .496-.152l3.4-3.399a.75.75 0 0 1 1.225.246 7.55 7.55 0 0 1-1.662 8.194 7.58 7.58 0 0 1-7.701 1.845l-3.626 3.627c-1.272 1.272-3.419 1.504-4.83.223a3.425 3.425 0 0 1-.122-4.963l3.731-3.73a7.57 7.57 0 0 1 1.841-7.71 7.56 7.56 0 0 1 8.19-1.661.75.75 0 0 1 .453.845m-6.362 11.973a.75.75 0 0 1 .81-.166 6.08 6.08 0 0 0 6.555-1.344 6.05 6.05 0 0 0 1.67-5.43l-2.512 2.512-.53-.53.53.532a2.06 2.06 0 0 1-1.847.56l-1.605-.318a2.05 2.05 0 0 1-1.613-1.609l-.32-1.61a2.05 2.05 0 0 1 .56-1.851l2.51-2.51a6.06 6.06 0 0 0-5.428 1.668 6.07 6.07 0 0 0-1.338 6.563.75.75 0 0 1-.166.808l-4.068 4.069a1.926 1.926 0 0 0 .07 2.79c.454.413 1.094.55 1.703.413a2.17 2.17 0 0 0 1.057-.584z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWrenchOutline;
