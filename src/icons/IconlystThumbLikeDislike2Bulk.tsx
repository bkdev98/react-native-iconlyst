import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeDislike2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.501 12.688a.75.75 0 0 0-.75.75v4.922a.75.75 0 0 0 1.5 0v-4.922a.75.75 0 0 0-.75-.75M20.75 5.64a.75.75 0 0 1 1.5 0v4.924a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 4.89a.75.75 0 0 0-.75.75v4.924a.75.75 0 0 0 1.5 0V5.64a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.56 13.433c-.366-.22-.905-.22-1.983-.22h-.99c-.185 0-.22-.072-.168-.234.715-2.223.348-3.108-.361-3.254-.271-.056-.384-.053-.598.156-.694.818-1.865 2.098-2.504 2.791-.165.18-.248.27-.307.37a1 1 0 0 0-.117.3c-.025.114-.025.235-.025.477v2.967c0 .71 0 1.063.136 1.335.124.25.326.451.576.576.27.136.626.136 1.334.136h3.1c.57 0 .857 0 1.096-.098.22-.089.412-.236.556-.426.156-.205.23-.48.379-1.032l.262-.97c.28-1.042.42-1.562.304-1.974a1.54 1.54 0 0 0-.69-.9M18.78 5.26c-.27-.135-.625-.135-1.333-.135h-3.1c-.571 0-.857 0-1.096.097-.22.089-.412.236-.556.426-.156.206-.231.481-.38 1.032l-.261.972c-.281 1.04-.421 1.561-.304 1.972.107.377.354.698.689.9.367.221.906.221 1.984.221h.99c.185 0 .22.071.168.234-.715 2.222-.348 3.107.36 3.253.272.056.385.053.599-.156.694-.818 1.865-2.098 2.504-2.791.165-.179.248-.269.307-.37q.081-.141.117-.3c.025-.114.025-.235.025-.477V7.171c0-.709 0-1.063-.136-1.335a1.3 1.3 0 0 0-.576-.576" />
    </G>
  </Svg>
);
export default IconlystThumbLikeDislike2Bulk;
