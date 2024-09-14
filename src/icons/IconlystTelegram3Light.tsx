import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegram3Light = ({
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
      d="M20.14 5.197c-.26-.203-.64-.32-1.274-.108L4.508 10.6c-.301.111-.64.193-.865.438-.282.33-.126.907.28 1.057.995.38 2.017.687 3.014 1.06.585.202 1.075.082 1.546-.147 2.592-1.26 5.227-2.67 7.676-4.185-1.611 1.61-3.295 3.146-4.914 4.748-.761.718-.785 1.158.093 1.81 1.533 1.094 3.053 2.205 4.582 3.303.573.403 1.344.555 1.798-.158.149-.226.16-.505.23-.76.83-3.725 1.636-7.455 2.462-11.18.118-.5.196-1.036-.27-1.39"
    />
  </Svg>
);
export default IconlystTelegram3Light;
