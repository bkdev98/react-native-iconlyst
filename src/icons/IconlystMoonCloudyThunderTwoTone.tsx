import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudyThunderTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.64 6.741a4.19 4.19 0 0 1 3.827-3.767c-1.241 3.353 1.242 5.81 4.522 4.518a4.194 4.194 0 0 1-3.655 3.819"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.946 4.739-.027-.008M16.878 17.77a3.63 3.63 0 0 0 2.135-3.307c0-2.274-1.604-3.627-3.596-3.628 0-1.43-1.122-4.293-4.291-4.293s-4.291 2.863-4.291 4.293c-1.99.017-3.596 1.353-3.596 3.628 0 1.472.876 2.739 2.135 3.308"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.44 17.566 1.493-3.642a.23.23 0 0 1 .217-.152h2.002c.16 0 .272.158.218.309l-.885 2.076c-.053.151.059.31.219.31h1.89c.199 0 .305.235.174.384l-3.588 4.095c-.161.185-.461.025-.398-.212l.684-2.565a.232.232 0 0 0-.224-.292H8.658a.232.232 0 0 1-.218-.311"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoonCloudyThunderTwoTone;
