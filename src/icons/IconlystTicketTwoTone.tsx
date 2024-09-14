import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketTwoTone = ({
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
      d="M17.05 7.445a1.61 1.61 0 0 1-.4-1.63c.12-.38.178-.57.185-.63.023-.21.017-.233-.1-.408-.034-.05-.104-.121-.245-.262-.655-.655-.983-.983-1.328-1.172a2.77 2.77 0 0 0-2.668 0c-.345.19-.673.517-1.328 1.172l-6.151 6.151c-.654.654-.981.982-1.17 1.326a2.77 2.77 0 0 0 0 2.673c.19.344.518.67 1.173 1.324.14.14.21.21.26.243.174.117.197.123.406.1.06-.006.25-.065.629-.182a1.61 1.61 0 0 1 1.63.404l.036.035c.404.433.525 1.03.37 1.56-.12.411-.18.617-.186.676-.02.215-.018.222.102.401.034.05.105.12.246.262.653.652.979.978 1.322 1.168.832.459 1.842.459 2.674 0 .343-.19.67-.516 1.322-1.168l6.155-6.155c.655-.655.982-.983 1.172-1.328a2.77 2.77 0 0 0 0-2.668c-.19-.345-.518-.673-1.173-1.328-.14-.14-.21-.21-.26-.244-.176-.117-.198-.123-.407-.1-.06.006-.251.065-.632.183a1.61 1.61 0 0 1-1.634-.403"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.19 14.31c-.409-.409-.613-.613-.722-.835-.2-.409-.2-.888 0-1.297.109-.222.313-.426.723-.835l1.65-1.65c.409-.41.613-.614.834-.723.41-.2.889-.2 1.298 0 .221.109.426.313.835.723.41.409.614.613.722.835.2.41.2.888 0 1.297-.108.222-.313.426-.722.835l-1.65 1.65c-.409.41-.613.614-.835.723-.41.2-.888.2-1.297 0-.222-.109-.426-.313-.835-.723"
    />
  </Svg>
);
export default IconlystTicketTwoTone;
