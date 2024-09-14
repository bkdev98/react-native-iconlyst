import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubSquareLight = ({
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
      d="M9.244 20.998c-.16-1.614.754-3.292 1.171-3.722-1.945-.241-3.99-.97-3.99-4.328a3.37 3.37 0 0 1 .93-2.342A3.14 3.14 0 0 1 7.41 8.27s.73-.217 2.422.916a8.3 8.3 0 0 1 4.336 0c1.692-1.133 2.423-.916 2.423-.916.319.742.338 1.579.056 2.335a3.37 3.37 0 0 1 .93 2.324c0 3.383-2.045 4.12-3.99 4.336.417.431 1.329 2.12 1.168 3.734l1.456-.002c2.958 0 4.787-2.082 4.787-5.02V8.03c0-2.948-1.829-5.03-4.777-5.03H7.787C4.85 3 3.001 5.082 3.001 8.03v7.948c0 2.938 1.839 5.02 4.786 5.02z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGithubSquareLight;
