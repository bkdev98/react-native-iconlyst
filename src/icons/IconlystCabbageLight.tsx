import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCabbageLight = ({
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
      d="M12.027 10.57c-3.888 3.09-2.682 7.573-1.385 8.955 2.31 2.459 6.966-.242 8.523-2.547 2.53-3.747 2.748-9.046-1.285-12.025-1.553 2.399-3.572 3.804-5.853 5.617"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.841 10.68c.148-1.62-1.224-4.714-5.68-5.851-2.249 1.848-4.454 6.701-2.249 11.328 2.205 4.628 7.96 4.713 9.876 4.27M7.304 5.004c1.762-1.306 6.049-2.985 10.106.324"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.063 9.543c.41 3.204 2.204 2.729 3.27 5.36"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.829 12.828c-.61.122-1.67.436-2.298.914M15.003 11.656c.391 1.187.825 4.006-.568 5.794M15.458 14.245l2.597-1.353"
    />
  </Svg>
);
export default IconlystCabbageLight;
