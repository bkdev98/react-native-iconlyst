import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitlabBulk = ({
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
      d="m3.679 9.475-.145.432-.01.026a.6.6 0 0 0-.044.127l-1.19 3.57c-.1.31 0 .65.27.84l9 6.59c.13.1.29.14.44.14a.7.7 0 0 0 .44-.14l9-6.59a.74.74 0 0 0 .27-.84l-1.19-3.57a.6.6 0 0 0-.055-.153l-.144-.432h-5.437c-.703 2.245-1.439 4.48-2.175 6.715v.002l-.472 1.432a.25.25 0 0 1-.477 0l-.468-1.434c-.73-2.235-1.46-4.47-2.157-6.715z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.102 9.37a.2.2 0 0 0 .168.09h5.474a.2.2 0 0 0 .18-.112q.429-1.372.838-2.75l1.078-3.277c.11-.31.39-.51.71-.52h.01c.32 0 .61.21.71.52l2.051 6.154h-5.436c-.27.835-1.577 4.898-2.176 6.715l-.472 1.435a.25.25 0 0 1-.477 0l-.466-1.43-.002-.004a2173 2173 0 0 1-2.164-6.716h-5.45L5.73 3.321a.75.75 0 0 1 1.43 0l1.213 3.65q.357 1.202.729 2.399"
    />
  </Svg>
);
export default IconlystGitlabBulk;
