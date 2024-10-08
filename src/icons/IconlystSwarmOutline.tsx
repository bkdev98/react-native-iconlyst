import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwarmOutline = ({
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
      d="M17.431 11.447c-1.059-.171-2.398.062-3.892.92-1.378.789-2.388 2.492-3.063 4.142a19 19 0 0 0-.775 2.327q.106.03.226.06c.557.145 1.33.32 2.197.44 1.779.243 3.772.227 5.15-.564 1.495-.857 2.367-1.89 2.745-2.883.374-.98.289-1.97-.215-2.835-.504-.867-1.325-1.437-2.373-1.607m-8.622 7.904-.736-.145v-.002l.001-.005.003-.015.012-.055q.014-.07.044-.2a20.292 20.292 0 0 1 .954-2.99c.7-1.706 1.868-3.821 3.706-4.874 1.72-.987 3.406-1.337 4.878-1.099 1.482.24 2.696 1.072 3.43 2.334s.853 2.725.32 4.124c-.53 1.388-1.68 2.663-3.4 3.65-1.837 1.052-4.263 1-6.1.747a20.7 20.7 0 0 1-3.28-.735l-.053-.017-.014-.005-.005-.002h-.001zm0 0-.241.71a.75.75 0 0 1-.495-.855z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.373 12.556a.75.75 0 0 1 .796.7c.068 1.041.575 2.176 1.35 3.25a11.8 11.8 0 0 0 2.688 2.666.75.75 0 1 1-.864 1.227 13.3 13.3 0 0 1-3.041-3.016c-.865-1.199-1.537-2.603-1.63-4.03a.75.75 0 0 1 .7-.797M15.775 10.328a.75.75 0 0 1 .75.75c0 2.383 1.255 4.607 3.17 5.98a.75.75 0 1 1-.873 1.219c-2.27-1.627-3.797-4.288-3.797-7.199a.75.75 0 0 1 .75-.75M14.789 4.743c-.327.23-.604.596-.74.921v.001c-.278.661-.211 1.369.023 2.162.95-.538 1.67-1.21 1.84-2.11.046-.283.039-.574-.03-.794-.062-.205-.155-.297-.279-.344l-.018-.007c-.213-.086-.476-.055-.796.171m1.35-1.565c-.84-.335-1.64-.066-2.214.339a3.77 3.77 0 0 0-1.26 1.568l.692.29-.691-.29c-.619 1.47-.15 2.942.274 4.066a.75.75 0 0 0 1.014.416c1.32-.604 3.074-1.648 3.434-3.583l.002-.014c.073-.438.083-.98-.074-1.489-.16-.523-.517-1.052-1.177-1.303M6.204 6.475c-.712-.058-1.362.063-1.867.387l-.006.003c-.357.224-.58.607-.581.964 0 .514.25 1.001.7 1.427a3.9 3.9 0 0 0 1.638.895l.006.002c1.449.392 3.095.089 4.603-.52-.624-1.092-1.399-1.984-2.469-2.556m-2.024-.602a5.3 5.3 0 0 1 2.024.602zm.12-1.496a6.8 6.8 0 0 1 2.61.775c1.681.897 2.721 2.366 3.475 3.912a.75.75 0 0 1-.35 1.005c-1.823.872-4.166 1.52-6.353.93a5.4 5.4 0 0 1-2.286-1.256c-.657-.62-1.17-1.478-1.17-2.517v-.001c.002-.944.553-1.773 1.28-2.23.858-.548 1.86-.692 2.794-.618"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwarmOutline;
