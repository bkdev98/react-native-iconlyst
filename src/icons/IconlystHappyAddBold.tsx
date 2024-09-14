import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyAddBold = ({
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
      d="M21.236 17.75h-1.4v-1.4c0-.5-.3-.8-.8-.8s-.8.4-.8.8v1.4h-1.5c-.5 0-.8.3-.8.8s.4.8.8.8h1.5v1.5c0 .5.4.8.8.8s.8-.4.8-.8v-1.5h1.4c.5 0 .8-.3.8-.8s-.4-.8-.8-.8"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.874 13.852c-3 0-5.4 2.4-5.4 5.4 0 .298.025.572.049.834.017.187.033.368.04.547a.28.28 0 0 1-.208.28c-.931.266-1.868.439-2.89.439-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5c0 .55-.045 1.046-.128 1.566-.076.478-.293.465-.673.444q-.132-.009-.29-.01M6.996 9.346a.97.97 0 0 1 .98-.97c.53 0 .97.44.97.97 0 .54-.44.98-.97.98-.54 0-.98-.44-.98-.98m4 7.08c-1.96 0-3.55-1.39-3.55-3.1 0-.28.23-.5.5-.5h6.1c.28 0 .5.22.5.5 0 1.71-1.59 3.1-3.55 3.1m3.48-8.05a.97.97 0 0 0-.98.97c0 .54.44.98.98.98.53 0 .97-.44.97-.98 0-.53-.44-.97-.97-.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyAddBold;
