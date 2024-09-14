import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeDislike1Broken = ({
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
      d="M10.153 12.62c.57 0 .857 0 1.096-.099.22-.089.412-.236.556-.426.156-.205.23-.48.379-1.032l.262-.97c.28-1.042.42-1.562.304-1.974a1.54 1.54 0 0 0-.69-.9C11.695 7 11.156 7 10.078 7h-.99c-.185 0-.22-.072-.168-.234.715-2.223.348-3.108-.361-3.254-.271-.056-.384-.053-.598.156-.694.818-1.865 2.098-2.504 2.791-.165.18-.248.27-.307.37a1 1 0 0 0-.117.3c-.025.114-.025.235-.025.477v2.967c0 .71 0 1.063.136 1.335.124.25.326.451.576.576.27.136.626.136 1.334.136M13.847 20.52c-.57 0-.857 0-1.096-.096a1.33 1.33 0 0 1-.556-.426c-.156-.206-.23-.482-.379-1.033l-.262-.971c-.28-1.041-.42-1.561-.304-1.973.107-.376.354-.698.69-.9.366-.22.905-.22 1.983-.22h.99c.185 0 .221-.072.168-.234-.715-2.222-.348-3.108.361-3.253.271-.056.384-.053.598.155.694.818 1.865 2.099 2.504 2.792.165.179.248.268.307.369q.081.141.117.3c.025.114.025.236.025.478v2.966c0 .709 0 1.064-.136 1.335-.124.25-.326.452-.576.576-.27.136-.626.136-1.334.136M3.001 12.399V7.477M20.999 20.3V15.38M19.087 7.557l1.012-.864M5.017 16.857l-1.012.864M16.579 5.729l.448-1.252M7.524 18.688l-.447 1.252"
    />
  </Svg>
);
export default IconlystThumbLikeDislike1Broken;
