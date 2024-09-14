import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSteemBulk = ({
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
      d="M12.5 2.505c-5.238 0-9.5 4.26-9.5 9.5 0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m16.634 16.175.3-.682a3.94 3.94 0 0 0-.012-3.275l-.803-1.614q-.15-.295-.15-.632 0-.335.152-.635l.427-.86a.749.749 0 1 0-1.343-.669l-.427.857c-.205.407-.31.848-.31 1.307 0 .46.105.901.31 1.305l.787 1.58a2.46 2.46 0 0 1 0 2.024l-.304.69a.75.75 0 0 0 1.373.604M13.317 17.2l.37-.86a4.78 4.78 0 0 0-.034-3.95l-1.024-2.068a2 2 0 0 1-.211-.89c0-.309.074-.618.213-.894l.54-1.08a.75.75 0 1 0-1.341-.67l-.54 1.076a3.49 3.49 0 0 0-.002 3.131l1.01 2.04a3.274 3.274 0 0 1 .016 2.701l-.374.87a.75.75 0 1 0 1.377.593M9.903 16.174l.3-.684c.23-.512.344-1.06.338-1.632a4 4 0 0 0-.37-1.64l-.802-1.614q-.15-.295-.15-.632 0-.335.152-.635l.427-.86a.749.749 0 1 0-1.343-.669l-.426.857c-.205.407-.31.848-.31 1.307 0 .46.105.901.309 1.305l.79 1.584q.22.49.224 1.01c.003.348-.068.695-.21 1.011l-.302.69a.748.748 0 0 0 .686 1.051.75.75 0 0 0 .687-.449"
    />
  </Svg>
);
export default IconlystSteemBulk;
