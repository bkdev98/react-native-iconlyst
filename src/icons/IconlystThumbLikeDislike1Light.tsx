import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeDislike1Light = ({
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
      d="M8.918 6.765c.715-2.223.348-3.108-.361-3.254-.271-.056-.384-.053-.598.156-.694.818-1.865 2.098-2.504 2.791-.165.18-.248.27-.307.37a1 1 0 0 0-.117.3c-.025.114-.025.235-.025.477v2.967c0 .709 0 1.063.136 1.335.124.25.326.451.576.576.271.136.626.136 1.334.136h3.1c.571 0 .857 0 1.096-.098.22-.089.413-.236.556-.426.156-.205.23-.48.38-1.032l.261-.971c.281-1.041.421-1.561.304-1.973a1.54 1.54 0 0 0-.69-.9C11.694 7 11.155 7 10.077 7h-.99c-.185 0-.22-.072-.168-.234M15.08 14.667c-.715-2.222-.348-3.108.361-3.253.271-.056.384-.053.598.155.694.818 1.865 2.099 2.504 2.792.166.179.248.268.307.37q.081.14.117.3c.025.113.025.234.025.477v2.966c0 .71 0 1.064-.136 1.335-.124.25-.326.452-.576.576-.271.136-.626.136-1.334.136h-3.1c-.571 0-.857 0-1.096-.097a1.3 1.3 0 0 1-.556-.426c-.156-.206-.23-.482-.38-1.033l-.261-.971c-.28-1.04-.421-1.561-.304-1.973.107-.376.354-.698.69-.9.366-.22.905-.22 1.983-.22h.99c.185 0 .22-.072.168-.234M3 12.399V7.477M20.998 20.3V15.38M19.086 7.559l1.012-.864M5.016 16.86l-1.012.863M16.578 5.73l.448-1.253M7.523 18.689l-.447 1.252"
    />
  </Svg>
);
export default IconlystThumbLikeDislike1Light;
