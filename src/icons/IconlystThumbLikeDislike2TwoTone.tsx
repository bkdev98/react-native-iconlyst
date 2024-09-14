import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeDislike2TwoTone = ({
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
      d="M9.418 13.058c.715-2.223.348-3.108-.361-3.254-.271-.056-.384-.053-.598.156-.694.818-1.865 2.098-2.504 2.791-.165.18-.248.27-.307.37a1 1 0 0 0-.117.3c-.025.114-.025.235-.025.478v2.966c0 .709 0 1.063.136 1.335.124.25.326.451.576.576.271.136.626.136 1.334.136h3.1c.571 0 .857 0 1.096-.098.22-.089.413-.236.556-.426.156-.205.23-.481.38-1.032l.261-.971c.281-1.041.421-1.561.304-1.973a1.54 1.54 0 0 0-.69-.9c-.366-.22-.905-.22-1.983-.22h-.99c-.185 0-.22-.072-.168-.234M15.58 11.06c-.715 2.222-.348 3.107.361 3.253.271.056.384.053.598-.156.694-.818 1.865-2.098 2.504-2.791.166-.18.248-.269.307-.37q.081-.141.117-.3c.025-.114.025-.235.025-.477V7.252c0-.709 0-1.063-.136-1.335a1.3 1.3 0 0 0-.576-.576c-.271-.135-.626-.135-1.334-.135h-3.1c-.571 0-.857 0-1.096.097-.22.09-.412.236-.556.426-.156.206-.23.481-.38 1.032l-.261.972c-.28 1.04-.421 1.56-.304 1.972.107.377.354.698.69.9.366.22.905.22 1.983.22h.99c.185 0 .22.072.168.235"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 18.695v-4.922M21.498 5.426v4.922"
    />
  </Svg>
);
export default IconlystThumbLikeDislike2TwoTone;
