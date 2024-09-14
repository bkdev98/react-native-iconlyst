import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeDislike2Broken = ({
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
      d="M10.153 18.854c.57 0 .857 0 1.096-.098.22-.09.412-.236.556-.426.156-.205.23-.481.379-1.032l.262-.971c.28-1.041.42-1.561.304-1.973a1.54 1.54 0 0 0-.69-.9c-.366-.22-.905-.22-1.983-.22h-.99c-.185 0-.22-.072-.168-.234.715-2.223.348-3.108-.361-3.254-.271-.056-.384-.053-.598.156-.694.818-1.865 2.098-2.504 2.79-.165.18-.248.27-.307.37a1 1 0 0 0-.117.3c-.025.115-.025.236-.025.478v2.967c0 .709 0 1.063.136 1.335.124.249.326.45.576.576.27.136.626.136 1.334.136M13.847 5.145c-.57 0-.857 0-1.096.097-.22.089-.412.236-.556.426-.156.206-.23.48-.379 1.032l-.262.972c-.28 1.04-.42 1.56-.304 1.972.107.377.354.697.69.9.366.22.905.22 1.983.22h.99c.185 0 .221.072.168.235-.715 2.221-.348 3.106.361 3.252.271.056.384.054.598-.155.694-.819 1.865-2.098 2.504-2.791.165-.18.248-.27.307-.37q.081-.142.117-.3c.025-.114.025-.236.025-.477V7.19c0-.71 0-1.063-.136-1.335a1.3 1.3 0 0 0-.576-.576c-.27-.135-.626-.135-1.334-.135M3.001 18.633V13.71M20.999 5.367v4.922"
    />
  </Svg>
);
export default IconlystThumbLikeDislike2Broken;
