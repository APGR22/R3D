const rootElement = document.querySelector(":root")

{
    const nav = document.querySelector("nav");
    const navDiv = document.getElementById("nav-div");
}

function PropertyValue2Number(value)
{
    let length = 0
    for (char of value)
    {
        if (isNaN(char)) break
        length++
    }
    return Number(value.substring(0, length))
}

function GetPropertyValueRect(element, name)
{
    const elementComputed = window.getComputedStyle(element, null)
    return {
        left: PropertyValue2Number(elementComputed.getPropertyValue(name + "-left")),
        top: PropertyValue2Number(elementComputed.getPropertyValue(name + "-top")),
        right: PropertyValue2Number(elementComputed.getPropertyValue(name + "-right")),
        bottom: PropertyValue2Number(elementComputed.getPropertyValue(name + "-bottom"))
    }
}

function GetOffsetRect(element)
{
    return {
        left: element.offsetLeft,
        top: element.offsetTop,
        right: element.offsetLeft + element.offsetWidth - 1,
        bottom: element.offsetTop + element.offsetHeight - 1
    }
}

function DropDownStart(idName)
{
    const element = document.getElementById(idName)

    const parent = element.parentElement
    const ParentOffsetRect = GetOffsetRect(parent)
    const ParentWidth = parent.offsetWidth

    const Border = GetPropertyValueRect(element, "border")
    const Padding = GetPropertyValueRect(element, "padding")

    const Outside = (Border.left + Border.right + Padding.left + Padding.right)

    element.style.left = ParentOffsetRect.left + "px"
    element.style.top = (ParentOffsetRect.bottom + 1) + "px"
    element.style.width = (ParentWidth - Outside) + "px"
    element.style.height = element.scrollHeight + "px"
}

function DropDownClose(idName)
{
    const element = document.getElementById(idName)

    element.style.height = "0"
}

document.addEventListener("DOMContentLoaded", function(){
    document.body.style.pointerEvents = "auto"
})