import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailThumbsUpLikeBulk = ({
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
      d="M17.525 2.713h-8.8c-2.9 0-5.1 2.4-5.1 5.5v4.277c0 .277.342.405.52.194l.06-.072q.07-.084.148-.162c.833-.837 1.806-.837 2.172-.837q.248 0 .493.049a3.1 3.1 0 0 1 2.075 1.472q.288.486.406 1.063c.212.065.425.152.641.27.837.378 1.427 1.067 1.756 2.054.338 1.011.081 2.023-.203 3.01a.3.3 0 0 0 .288.382h5.544c1.3 0 2.5-.5 3.5-1.4 1-1 1.6-2.5 1.6-4.1v-6.2c0-3.1-2.2-5.5-5.1-5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.925 9.013-4 3.2q-.75.6-1.8.6-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.3.5.2 1-.1 1.2M9.392 16.774c-.38-.236-.763-.236-1.567-.236h-.33c.227-.874.216-1.505-.03-1.922-.15-.251-.38-.413-.74-.478-.224 0-.456 0-.688.235a36 36 0 0 1-1.779 1.977c-.183.182-.408.489-.408.763v2.4c0 1.272.575 1.775 1.775 1.775h2.2c.587 0 1.04-.086 1.465-.51.38-.38.453-1.062.595-1.562.211-.737.333-1.21.196-1.621-.104-.31-.25-.654-.689-.821M2.125 16.162a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailThumbsUpLikeBulk;
