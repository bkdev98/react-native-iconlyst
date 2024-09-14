import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditAiOutline = ({
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
      d="M3.08 9.778a.75.75 0 0 1 .68.816c-.249 2.709 1.258 5.875 4.243 7.965a10.7 10.7 0 0 0 3.847 1.708.75.75 0 1 1-.32 1.466 12.2 12.2 0 0 1-4.388-1.946c-3.34-2.34-5.182-5.99-4.877-9.33a.75.75 0 0 1 .816-.679M18.212 8.23a.75.75 0 0 1 1.056.105c1.306 1.593 2.005 3.27 2.24 4.766.233 1.475.024 2.848-.592 3.771-1.168 1.753-2.935 2.019-4.283 1.884a7.6 7.6 0 0 1-2.35-.643l-.041-.02-.013-.006-.004-.003h-.002l.334-.672-.335.671a.75.75 0 0 1 .67-1.342l.003.002.023.01.104.047c.094.04.234.097.408.157.352.122.83.254 1.353.306 1.042.105 2.142-.107 2.885-1.223.34-.51.555-1.464.36-2.705-.193-1.22-.774-2.651-1.92-4.05a.75.75 0 0 1 .104-1.055M9.858 4.56a.75.75 0 0 1 .788-.71c1.573.084 3.201.529 4.74 1.336a.75.75 0 0 1-.696 1.329c-1.357-.712-2.775-1.095-4.123-1.167a.75.75 0 0 1-.71-.788"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.917 2.335c.633.181 1.183.621 1.57.97.387.35.88.851 1.125 1.463.129.32.196.69.13 1.088-.068.399-.26.767-.559 1.098l-.012.013-7.949 8.376c-.4.439-.958.701-1.551.73l-1.998.094a1.247 1.247 0 0 1-1.304-1.177l-.11-1.997a2.24 2.24 0 0 1 .573-1.626l.013-.014 7.948-8.375c.297-.327.641-.554 1.028-.66a2 2 0 0 1 1.096.017m-.698 1.43c-.07.018-.179.07-.319.225l-.013.014-7.946 8.374a.74.74 0 0 0-.185.532l.096 1.746 1.748-.082a.74.74 0 0 0 .516-.244l.012-.014 7.948-8.374c.135-.152.174-.263.186-.334a.5.5 0 0 0-.043-.283c-.108-.271-.374-.578-.737-.906s-.696-.561-.976-.641a.5.5 0 0 0-.287-.014M6.185 3.65a.75.75 0 0 1 .704.49l.085.233c.248.669.774 1.196 1.442 1.443l.231.086a.75.75 0 0 1 0 1.407l-.231.086a2.44 2.44 0 0 0-1.442 1.443l-.085.232a.75.75 0 0 1-1.407 0l-.086-.232a2.44 2.44 0 0 0-1.441-1.443l-.232-.086a.75.75 0 0 1 0-1.407l.232-.086a2.44 2.44 0 0 0 1.441-1.443l.086-.232a.75.75 0 0 1 .703-.49m-.618 2.956q.344.274.618.618.275-.343.618-.618a4 4 0 0 1-.618-.619q-.274.344-.618.619"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEditAiOutline;
