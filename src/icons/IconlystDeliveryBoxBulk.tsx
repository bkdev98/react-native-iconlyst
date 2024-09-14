import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxBulk = ({
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
      d="M11.005 20.126c-.26-.002-.563-.225-.571-.533a.54.54 0 0 1 .287-.493c.015-.006.025-.018.039-.025a.6.6 0 0 1 .209-.05h.015c.295 0 .548.24.557.532a.554.554 0 0 1-.536.57m9.88-4.52a.753.753 0 0 0-.976-.417l-7.434 2.988a2.07 2.07 0 0 0-1.558-.652c-.014.001-.028.006-.042.006L6.588 6.944a.75.75 0 0 0-.484-.439l-2.081-.609A.75.75 0 0 0 3.6 7.335l1.733.508 4.178 10.318a2.04 2.04 0 0 0-.578 1.476 2.056 2.056 0 0 0 2.056 1.99q.028 0 .057-.002a2.05 2.05 0 0 0 1.99-2.058l7.43-2.986a.75.75 0 0 0 .418-.976"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.181 10.478c-.564.216-.979.595-1.2 1.096-.23.518-.226 1.133.01 1.73l.641 1.681c.36.926 1.11 1.455 1.967 1.455.268 0 .546-.052.826-.159l2.686-1.04c.564-.215.978-.594 1.2-1.094.228-.518.225-1.134-.009-1.73l-.643-1.683c-.469-1.21-1.613-1.745-2.793-1.296zM8.836 8.087c.36.918 1.11 1.444 1.966 1.444.267 0 .546-.052.825-.159l2.688-1.03.004-.002c1.167-.459 1.656-1.626 1.187-2.834l-.644-1.683c-.236-.603-.652-1.06-1.172-1.287-.5-.219-1.062-.217-1.62.002L9.38 3.57c-1.168.46-1.656 1.627-1.187 2.834z" />
    </G>
  </Svg>
);
export default IconlystDeliveryBoxBulk;
