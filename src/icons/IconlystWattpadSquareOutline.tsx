import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWattpadSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.112 11.28-.118.201a.75.75 0 0 1-1.393-.45l.01-.115c.052-.533.094-.968.04-1.395-.032-.237-.118-.394-.198-.475-.062-.06-.148-.11-.322-.091l-.009.001c-.259.025-.494.21-.67.826-.17.598-.192 1.327-.202 1.885-.005.673.034 1.557.246 2.315s.54 1.198.97 1.353c.314.057.538-.031.758-.228.265-.236.5-.616.73-1.083q.12-.246.242-.514c.247-.533.517-1.116.843-1.649a.75.75 0 0 1 1.388.446c-.034.465-.003 1.025.148 1.452.145.41.338.565.6.593l.009.002c.2.024.359-.037.54-.214.203-.2.382-.502.562-.86a32 32 0 0 1 2.255-3.925c.145-.214.194-.373.206-.459-.206-.01-.536.118-1.015.573-.463.44-.87 1.002-1.174 1.42l-.085.117a.75.75 0 0 1-1.346-.564c.068-.41.091-.939-.009-1.336-.048-.193-.114-.304-.168-.36-.04-.042-.096-.082-.227-.09l-.006-.001c-.422-.03-.9.24-1.438.872-.463.542-.845 1.2-1.167 1.753m2.71-4.122c-1.17-.082-2.074.681-2.684 1.395q-.075.088-.149.18a2.1 2.1 0 0 0-.477-.748c-.389-.388-.926-.588-1.54-.521-1.207.12-1.736 1.112-1.962 1.908-.232.815-.25 1.736-.26 2.272v.007c-.005.712.03 1.768.301 2.735.265.946.817 2.012 1.993 2.389l.072.019c.872.186 1.58-.097 2.107-.568.493-.44.832-1.042 1.079-1.542l.003-.006.019-.04c.3.584.825 1.11 1.683 1.205.76.091 1.348-.221 1.766-.632.396-.387.667-.886.856-1.265l.003-.006a30.6 30.6 0 0 1 2.153-3.746c.27-.4.477-.885.465-1.379a1.42 1.42 0 0 0-.955-1.332c-1.07-.34-2.018.35-2.597.9q-.09.085-.177.175a2.2 2.2 0 0 0-.486-.849 1.8 1.8 0 0 0-1.213-.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWattpadSquareOutline;
